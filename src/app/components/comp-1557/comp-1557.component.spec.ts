/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1557Component } from './comp-1557.component';

describe('Comp1557Component', () => {
  let component: Comp1557Component;
  let fixture: ComponentFixture<Comp1557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
