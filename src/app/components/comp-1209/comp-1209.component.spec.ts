/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1209Component } from './comp-1209.component';

describe('Comp1209Component', () => {
  let component: Comp1209Component;
  let fixture: ComponentFixture<Comp1209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
