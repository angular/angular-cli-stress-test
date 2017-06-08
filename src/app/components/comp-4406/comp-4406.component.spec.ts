/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4406Component } from './comp-4406.component';

describe('Comp4406Component', () => {
  let component: Comp4406Component;
  let fixture: ComponentFixture<Comp4406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
