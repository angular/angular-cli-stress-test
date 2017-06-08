/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4068Component } from './comp-4068.component';

describe('Comp4068Component', () => {
  let component: Comp4068Component;
  let fixture: ComponentFixture<Comp4068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
