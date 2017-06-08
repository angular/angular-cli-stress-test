/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1554Component } from './comp-1554.component';

describe('Comp1554Component', () => {
  let component: Comp1554Component;
  let fixture: ComponentFixture<Comp1554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
