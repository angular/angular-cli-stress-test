/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp772Component } from './comp-772.component';

describe('Comp772Component', () => {
  let component: Comp772Component;
  let fixture: ComponentFixture<Comp772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
