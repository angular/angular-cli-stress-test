/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp231Component } from './comp-231.component';

describe('Comp231Component', () => {
  let component: Comp231Component;
  let fixture: ComponentFixture<Comp231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
