/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp71Component } from './comp-71.component';

describe('Comp71Component', () => {
  let component: Comp71Component;
  let fixture: ComponentFixture<Comp71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
