/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3390Component } from './comp-3390.component';

describe('Comp3390Component', () => {
  let component: Comp3390Component;
  let fixture: ComponentFixture<Comp3390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
