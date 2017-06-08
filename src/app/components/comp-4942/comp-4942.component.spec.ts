/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4942Component } from './comp-4942.component';

describe('Comp4942Component', () => {
  let component: Comp4942Component;
  let fixture: ComponentFixture<Comp4942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
