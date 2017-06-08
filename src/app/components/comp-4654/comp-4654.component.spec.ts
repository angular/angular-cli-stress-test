/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4654Component } from './comp-4654.component';

describe('Comp4654Component', () => {
  let component: Comp4654Component;
  let fixture: ComponentFixture<Comp4654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
