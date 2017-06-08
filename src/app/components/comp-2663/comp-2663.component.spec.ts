/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2663Component } from './comp-2663.component';

describe('Comp2663Component', () => {
  let component: Comp2663Component;
  let fixture: ComponentFixture<Comp2663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
