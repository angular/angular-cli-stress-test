/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp519Component } from './comp-519.component';

describe('Comp519Component', () => {
  let component: Comp519Component;
  let fixture: ComponentFixture<Comp519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
