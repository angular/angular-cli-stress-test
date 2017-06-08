/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2323Component } from './comp-2323.component';

describe('Comp2323Component', () => {
  let component: Comp2323Component;
  let fixture: ComponentFixture<Comp2323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
