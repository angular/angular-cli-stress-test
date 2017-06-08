/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp388Component } from './comp-388.component';

describe('Comp388Component', () => {
  let component: Comp388Component;
  let fixture: ComponentFixture<Comp388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
