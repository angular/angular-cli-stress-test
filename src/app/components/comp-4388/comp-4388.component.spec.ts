/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4388Component } from './comp-4388.component';

describe('Comp4388Component', () => {
  let component: Comp4388Component;
  let fixture: ComponentFixture<Comp4388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
