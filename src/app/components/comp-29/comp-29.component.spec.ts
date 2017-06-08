/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp29Component } from './comp-29.component';

describe('Comp29Component', () => {
  let component: Comp29Component;
  let fixture: ComponentFixture<Comp29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
