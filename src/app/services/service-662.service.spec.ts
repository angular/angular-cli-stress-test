/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service662Service } from './service-662.service';

describe('Service662Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service662Service]
    });
  });

  it('should ...', inject([Service662Service], (service: Service662Service) => {
    expect(service).toBeTruthy();
  }));
});
