/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp258Component } from './comp-258.component';

describe('Comp258Component', () => {
  let component: Comp258Component;
  let fixture: ComponentFixture<Comp258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
