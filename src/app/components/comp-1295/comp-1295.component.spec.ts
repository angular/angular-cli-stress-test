/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1295Component } from './comp-1295.component';

describe('Comp1295Component', () => {
  let component: Comp1295Component;
  let fixture: ComponentFixture<Comp1295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
