/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2755Component } from './comp-2755.component';

describe('Comp2755Component', () => {
  let component: Comp2755Component;
  let fixture: ComponentFixture<Comp2755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
