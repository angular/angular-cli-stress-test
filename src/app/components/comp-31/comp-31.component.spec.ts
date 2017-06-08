/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp31Component } from './comp-31.component';

describe('Comp31Component', () => {
  let component: Comp31Component;
  let fixture: ComponentFixture<Comp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
