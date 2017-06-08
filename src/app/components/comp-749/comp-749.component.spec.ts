/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp749Component } from './comp-749.component';

describe('Comp749Component', () => {
  let component: Comp749Component;
  let fixture: ComponentFixture<Comp749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
