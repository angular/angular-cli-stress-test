/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4599Component } from './comp-4599.component';

describe('Comp4599Component', () => {
  let component: Comp4599Component;
  let fixture: ComponentFixture<Comp4599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
