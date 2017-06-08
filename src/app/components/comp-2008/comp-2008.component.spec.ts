/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2008Component } from './comp-2008.component';

describe('Comp2008Component', () => {
  let component: Comp2008Component;
  let fixture: ComponentFixture<Comp2008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
