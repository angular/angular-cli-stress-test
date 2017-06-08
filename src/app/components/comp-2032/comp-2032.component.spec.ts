/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2032Component } from './comp-2032.component';

describe('Comp2032Component', () => {
  let component: Comp2032Component;
  let fixture: ComponentFixture<Comp2032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
