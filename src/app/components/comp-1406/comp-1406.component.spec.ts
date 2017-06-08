/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1406Component } from './comp-1406.component';

describe('Comp1406Component', () => {
  let component: Comp1406Component;
  let fixture: ComponentFixture<Comp1406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
