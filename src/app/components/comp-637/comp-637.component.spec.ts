/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp637Component } from './comp-637.component';

describe('Comp637Component', () => {
  let component: Comp637Component;
  let fixture: ComponentFixture<Comp637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
