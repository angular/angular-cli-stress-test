/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3464Component } from './comp-3464.component';

describe('Comp3464Component', () => {
  let component: Comp3464Component;
  let fixture: ComponentFixture<Comp3464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
