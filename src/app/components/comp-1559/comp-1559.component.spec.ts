/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1559Component } from './comp-1559.component';

describe('Comp1559Component', () => {
  let component: Comp1559Component;
  let fixture: ComponentFixture<Comp1559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
