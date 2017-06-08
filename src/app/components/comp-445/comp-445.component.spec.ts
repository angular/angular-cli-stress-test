/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp445Component } from './comp-445.component';

describe('Comp445Component', () => {
  let component: Comp445Component;
  let fixture: ComponentFixture<Comp445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
