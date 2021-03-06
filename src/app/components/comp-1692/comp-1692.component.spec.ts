/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1692Component } from './comp-1692.component';

describe('Comp1692Component', () => {
  let component: Comp1692Component;
  let fixture: ComponentFixture<Comp1692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
