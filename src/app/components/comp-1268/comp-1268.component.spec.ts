/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1268Component } from './comp-1268.component';

describe('Comp1268Component', () => {
  let component: Comp1268Component;
  let fixture: ComponentFixture<Comp1268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
