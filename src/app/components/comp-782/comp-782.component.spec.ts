/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp782Component } from './comp-782.component';

describe('Comp782Component', () => {
  let component: Comp782Component;
  let fixture: ComponentFixture<Comp782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
