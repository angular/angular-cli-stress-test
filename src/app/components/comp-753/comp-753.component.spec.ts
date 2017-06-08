/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp753Component } from './comp-753.component';

describe('Comp753Component', () => {
  let component: Comp753Component;
  let fixture: ComponentFixture<Comp753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
