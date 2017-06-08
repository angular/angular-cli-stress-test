/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp507Component } from './comp-507.component';

describe('Comp507Component', () => {
  let component: Comp507Component;
  let fixture: ComponentFixture<Comp507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
