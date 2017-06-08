/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp472Component } from './comp-472.component';

describe('Comp472Component', () => {
  let component: Comp472Component;
  let fixture: ComponentFixture<Comp472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
