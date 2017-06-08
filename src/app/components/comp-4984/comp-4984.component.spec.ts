/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4984Component } from './comp-4984.component';

describe('Comp4984Component', () => {
  let component: Comp4984Component;
  let fixture: ComponentFixture<Comp4984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
