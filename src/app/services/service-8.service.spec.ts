/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service8Service } from './service-8.service';

describe('Service8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service8Service]
    });
  });

  it('should ...', inject([Service8Service], (service: Service8Service) => {
    expect(service).toBeTruthy();
  }));
});
