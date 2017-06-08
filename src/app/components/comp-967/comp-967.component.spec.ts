/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp967Component } from './comp-967.component';

describe('Comp967Component', () => {
  let component: Comp967Component;
  let fixture: ComponentFixture<Comp967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
