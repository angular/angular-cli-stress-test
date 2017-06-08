/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1539Component } from './comp-1539.component';

describe('Comp1539Component', () => {
  let component: Comp1539Component;
  let fixture: ComponentFixture<Comp1539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
