/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3502Component } from './comp-3502.component';

describe('Comp3502Component', () => {
  let component: Comp3502Component;
  let fixture: ComponentFixture<Comp3502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
