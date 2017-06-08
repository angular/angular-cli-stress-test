/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2078Component } from './comp-2078.component';

describe('Comp2078Component', () => {
  let component: Comp2078Component;
  let fixture: ComponentFixture<Comp2078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
