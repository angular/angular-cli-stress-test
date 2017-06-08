/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1283Component } from './comp-1283.component';

describe('Comp1283Component', () => {
  let component: Comp1283Component;
  let fixture: ComponentFixture<Comp1283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
