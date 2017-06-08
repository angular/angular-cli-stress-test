/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4087Component } from './comp-4087.component';

describe('Comp4087Component', () => {
  let component: Comp4087Component;
  let fixture: ComponentFixture<Comp4087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
