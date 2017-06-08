/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1691Component } from './comp-1691.component';

describe('Comp1691Component', () => {
  let component: Comp1691Component;
  let fixture: ComponentFixture<Comp1691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
