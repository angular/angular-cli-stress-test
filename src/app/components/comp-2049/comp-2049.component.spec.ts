/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2049Component } from './comp-2049.component';

describe('Comp2049Component', () => {
  let component: Comp2049Component;
  let fixture: ComponentFixture<Comp2049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
