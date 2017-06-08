/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service212Service } from './service-212.service';

describe('Service212Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service212Service]
    });
  });

  it('should ...', inject([Service212Service], (service: Service212Service) => {
    expect(service).toBeTruthy();
  }));
});
