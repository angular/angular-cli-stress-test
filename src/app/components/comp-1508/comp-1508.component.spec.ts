/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1508Component } from './comp-1508.component';

describe('Comp1508Component', () => {
  let component: Comp1508Component;
  let fixture: ComponentFixture<Comp1508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
