/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4295Component } from './comp-4295.component';

describe('Comp4295Component', () => {
  let component: Comp4295Component;
  let fixture: ComponentFixture<Comp4295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
