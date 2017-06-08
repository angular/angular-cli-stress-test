/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1589Component } from './comp-1589.component';

describe('Comp1589Component', () => {
  let component: Comp1589Component;
  let fixture: ComponentFixture<Comp1589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
