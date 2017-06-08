/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp538Component } from './comp-538.component';

describe('Comp538Component', () => {
  let component: Comp538Component;
  let fixture: ComponentFixture<Comp538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
