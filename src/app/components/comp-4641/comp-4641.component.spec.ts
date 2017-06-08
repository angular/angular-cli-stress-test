/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4641Component } from './comp-4641.component';

describe('Comp4641Component', () => {
  let component: Comp4641Component;
  let fixture: ComponentFixture<Comp4641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
